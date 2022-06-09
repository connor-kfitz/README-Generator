# Node.js Challenge: Professional README Generator

## Link
https://drive.google.com/file/d/1DwLQ1SVaZKk93IbwwpZfyd4XibRjZi_N/view

## Description
The purpose of this project is to create a professional README.md generator using node.js.  The generator will take in a variety of inputs in order to disaply info about the users project.  There will also be an option for the user to add licensing information.  If a license is selected, the respective banner will be displayed at the top of the file.    

## Steps Taken
1.  Imported required npm libraries
2.  Created an array of questions to ask the user during prompts
3.  Created a function to write the data to a new README file
4.  Created an init function to run the program.  First prompts are utilized to ask the user questions from the array in step 2.  Then the data license data is collected and filtered to get the correct banner.  
A template literal is used to create a skeleton for the README, utilizing data from the prompts.  Lastly, the write data function is called on the template literal skeleton
5.  Call init function to run the program

