import tk_app # Depends on purpose of proj (temp_name)
import requests # Used to communicate with YouTube end point
import flask
import json
#from config import api_key {*THIS was wrong it didnt like me importing config maybe because it was already imported in views/__init__??}
from tk_app.views.config import api_key

#pip install google-api-python-client
from googleapiclient.discovery import build

# Establishes connection to youtube api
youtube = build('youtube', 'v3', developerKey=api_key)

# Need to render index here since solely stickig to server side dynamic for now
@tk_app.app.route('/api/v1/comments/')
def get_comments():
    print("IM PRINTING PY")
    comments = [] #just data top level comm
    replies_dict = [] #Stores replies and names of that list of dictionaries
    collective = [] #Use this to append TOTAL list of tied comments + replies PER TOP LVL 



    comments_id = [] # holds the id of comments corresponding to 'comments'

    # TODO: Make api request to youtube database, redirect to webpage with updated context

    #comments_response = youtube.commentThreads().list(
    comments_response = youtube.commentThreads().list(
        part='snippet,replies', #Required (Optional 'replies' to include replies)
        videoId="Uh3Drq60OBI", # 'v' query in video url
        maxResults=7,  # Adjust as needed
        textFormat="plainText" # textFormat is used to get plain text response instead of html (def)
    ).execute()
    
    # Pretty-print the JSON {yipee}
    formatted_json = json.dumps(comments_response, indent=3)

    print(f"{formatted_json}\n")

    # Get all comments from json into a list data struct
    for comment in comments_response['items']:
        replies = [] # reset on new top_lvl comment

        # Tuple holding 'base' comment and id of that comment
        #comment_dat = (comment['snippet']['topLevelComment']['snippet']['textDisplay'],
        #               comment['snippet']['topLevelComment']['id'])

        # Hold the text for the current comment
        comment_temp = comment['snippet']['topLevelComment']['snippet']['textDisplay']
        username = comment['snippet']['topLevelComment']['snippet']['authorDisplayName']

        # comment_dat = comment['snippet']['topLevelComment']['snippet']['textDisplay']
        comment_dat = {"comment":comment_temp, "username":username}

        # Ensures that doesn't try to append nothing if there is replies if none
        if 'replies' in comment:
            for reply in comment['replies']['comments']:
                replies.append({"reply":reply['snippet']['textDisplay'], "username":reply['snippet']['authorDisplayName']})

        temp = {"comment":comment_dat, "replies":replies}
        collective.append(temp)
        context = {"comments":collective}


    # print(f"CONTEXT: {context}")
    formatted_json = json.dumps(context, indent=3)
    print(f"COMTEXT: {formatted_json}")
    return flask.jsonify(**context)