import api

# startx = -71.95 # MA.jpg
# starty = 42.46

startx = -107.4 # WY.jpg
starty = 42.1

diffx = 0.04
diffy = 0.02

fh = open('out','w+')
fh.write('var data = { \n\t\"data\" : {\n')
count = 0
for x in range(30):
	xcoord = startx + (x * diffx)
	for y in range(30):
		print count
		ycoord = starty - (y * diffy)
		content = api.getWindData(ycoord,xcoord)
		windSpeed = content['wind']['speed']
		fh.write("\t\"%s-%s\" : %s,\n" % (y,x,windSpeed))
		fh.flush()
		count += 1
fh.write('\t}\n};\n')
fh.close()