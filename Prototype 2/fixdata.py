import re
myRe = '^(\d+)\s(\d+):\s(\d+\.\d+)$'
content = open('out','r').read().split('\n')
fh = open('out2','w+')
count = 0
fh.write('var data = { \n\t\"data\" : {\n')
for x in content:
	m = re.match(myRe,x)
	if m:
		fh.write("\t\"%s-%s\" : %s,\n" % (m.group(2),m.group(1),m.group(3)))
fh.write('\t}\n};\n')