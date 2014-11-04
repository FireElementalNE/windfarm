import urllib,json
def getWindData(ycoord,xcoord):
	api_key = 'a812a13049674c27b45696c358f80316'
	url = "http://api.openweathermap.org/data/2.5/weather?lat=%f&lon=%f&APPID=%s" % (ycoord,xcoord,api_key)
	content = json.loads(urllib.urlopen(url).read()) #Fetch and load JSON data
	return content
