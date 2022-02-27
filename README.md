# Truepill Pharmacy Kata
Pharmacy Stock Kata completed as a part of of the application process for Truepill

## Introduction
The aim of this task was to implement a simple, console-based application which will allow the
pharmacist to firstly, add medicine to the formulary and then, ased on the formulary the application should
allow the pharmacist to update stock levels of various medicine. Note that only the medication in the
formulary can be added to stock.

## Technologies
To write the code I have used javascript in Visual Studio Code

To install javascript, run the following command in the VSCode terminal:
-npm install node

Inside of VSCode I have also installed the "Code Runner" extension,
this can be done by going to the extensions tab in VSCode and searching for
"Code Runner" and then installing it.

I have then run the code using ctrl+alt+n inside of VSCode

## Code Overview
The code I have written is rather basic, it shows to the user a main menu from which a variety of options can be selected.
It uses a while loop to keep the menu going until the 'quit' option is selected at which point the 'running' variable
is updated from true to false. The option selection is performed by a simple switch statement, based on the choice, a different
block of code is run. This code contains following options:

- Option 1: Allows the used to add medication to the formulary. It first asks the user how many medications they would like 
            to add after which the user is asked for the name of the medication. The medication is then added to the 'formulary'
            list
- Option 2: This option simply prints the items that are in the 'formulary' list
- Option 3: This option allows the user to update the inventory, the user is asked how many medications they would like to update,
            after which they are asked to input the name of the medication they wish to update. After that, the user is asked to 
            input the strength of the medication, as well as the pack size, and number of packs. This option does not how i would
            have liked it to(see shortcomings).
- Option 4: This option prints the inventory, that is name of the med, strength, pack size, and number of packs in stock.
- Option 5: This option quits the program by setting the 'running' variable to false therefore terminating the loop.

## Shortcomings
