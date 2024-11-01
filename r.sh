#!/bin/bash
echo "Enter the filename to run"
read file

if [[ -f $file ]]
then
	node $file
else
	echo "FILE NOT FOUND...."
fi

