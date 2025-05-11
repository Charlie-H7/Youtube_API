import tk_app # Depends on purpose of proj (temp_name)
import requests # Used to communicate with YouTube end point
import flask
import json
#from config import api_key {*THIS was wrong it didnt like me importing config maybe because it was already imported in views/__init__??}
from tk_app.views.config import api_key

#pip install google-api-python-client
from googleapiclient.discovery import build


# Used for initial render
@tk_app.app.route('/')
def page_init():

    #tk_app.app.logger("bruh??")
    print("Initial render")
    context = {"comments":["com1", "com2"]}
    return flask.render_template("index.html", **context)
