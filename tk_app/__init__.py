import flask
#from tk_app.views import comments

# Create flask app instance
app = flask.Flask(__name__)

# NO database functionality planned yet so model and config tk
#import tk_app.views
# Import views to register the routes
from tk_app.views import *