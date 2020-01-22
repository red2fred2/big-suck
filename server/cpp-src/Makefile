#run: make depend    to generate dependencies

#output file name
EXEC = ../driver

#compiler
CC = g++

#compiler options
CFLAGS = -std=c++17 -g -Wall -Wextra -Wfatal-errors

#compiler find dependencies
CF = -MM

SRCS = $(wildcard *.cpp)
OBJS = ${SRCS:.cpp=.o}

$(EXEC): $(OBJS)
	$(CC) $(CFLAGS) $(OBJS) -o $(EXEC)

$(OBJS):
	$(CC) $(CFLAGS) -c $*.cpp

depend:
	$(CC) $(CF) $(SRCS) > Makefile.dep

Makefile.dep:
	touch Makefile.dep

clean:
	rm *.o $(EXEC)

include Makefile.dep
