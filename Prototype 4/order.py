import sys,os,re
try:
	directory = sys.argv[1]
except IndexError:
	print 'Usage: python ' + sys.argv[0] + ' <directory>'
	sys.exit(0)


files = []

for root, dirnames, filenames in os.walk(directory):
	for filename in filenames:
		nameRe = '^\d{4}\.\d{2}\.\d{2}\-\d{2}\.\d{2}.\d{2}$'
		m = re.match(nameRe,filename)
		if m:
			files.append(filename)

f = sorted(files)
out = open('out.js','w+')
for x in f:
	fh = open(x,'r')
	content = fh.read()
	fh.close()
	out.write(content)

