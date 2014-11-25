def main(i):
	timeFormat = '%Y.%m.%d-%H.%M.%S'
	errorCount = 0
	for count in range(i):
		currentTime = strftime(timeFormat)
		writeData(currentTime)
		sleep(60*60*5)

if __name__ == "__main__":
    import sys
    from urllib2 import Request,urlopen,HTTPError
    from time import sleep,strftime
    from getdata import writeData
    try:
        trialNum = int(sys.argv[1])
    except IndexError:
        print 'Usage: python %s <number of iterations>' % (sys.argv[0])
        sys.exit(0)
    main(trialNum)


