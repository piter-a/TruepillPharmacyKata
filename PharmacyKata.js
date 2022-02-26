// constant variables
const inventory_header = ['Name', 'Strength', 'Pack Size', 'Total Packs'];
const prompt = require('prompt-sync')();

// vars that will be updated throughout the code
var formulary = [];
var inventory = [inventory_header];
var choice1 = 'y';
var running  = true;

// welcome message
console.log('--- WELCOME TO THE INVENTORY MANAGEMENT SYSTEM ---');

// this loop will run until option 5 is selected making the running variable == false therefore terminating the loop
while(running) {
    // options menu
    console.log('--- MAIN MENU ---\n1: Add medication to the formulary\n2: Show medication in the formulary\n3: Update Inventory\n4: Show inventory\n5: Quit');
    var choice = parseInt(prompt());

    // switch statement, different action will be performed depending on which option is chosen from the menu
    switch(choice) {
        // option 1 allows the pharmacist to add medication to the formulary, only medication in the formulary can be updated in the inventory
        case 1:
            choice1 = 'y'
            while(choice1 == 'y') {
                console.log('How many medications would you like to add?')
                var num_meds = parseInt(prompt());
    
                for(let i = 0; i < num_meds; i++) {
                    console.log('Enter the name of the medication you would like to add to the formulary.');
                    var med_name = prompt();
    
                    if(!formulary.includes(med_name)) {
                        formulary.push(med_name);
                    } else {
                        console.log('This medication is already in the formulary.');
                    }
                } 

                console.log('Would you like to add more medication to the formulary?(y/n)');
                choice1 = prompt();
            }
            break;

        // option 2 prints all the medication in the formulary
        case 2:
            console.log('Medication in the formulary:');
            formulary.forEach(function(entry) {
                console.log(entry);
            });
            break;

        // option 3 allows the pharmacist to update the inventory(this option does not work as i intended it to ---> check readme file)
        case 3:
            choice1 = 'y';
            while(choice1 == 'y') {
                console.log('Enter the number of medications you wish to update:');
                var num_inventory = parseInt(prompt());
            
                for(let i = 0; i < num_inventory; i++) {
                    console.log('Enter the name of the medication you wish to update:');
                    var med_name1 = prompt();
                    
                    if(!inventory.includes(med_name1) && formulary.includes(med_name1)) {
                        console.log('What is the strength(mg) of the medication?');
                        var strength = parseInt(prompt());
                        strength = strength + 'mg';
            
                        console.log('What is the pack size of the medication?');
                        var pack_size = parseInt(prompt());
            
                        console.log('How many packs would you like to add to the inventory?');
                        var packs = parseInt(prompt());
            
                        inventory.push([med_name1, strength, pack_size, packs]);
                    } else {
                        console.log('This medication is not in the formulary therefore stock levels can\'t be updated, try again.');
                    }
                }

                console.log('Would you like to add more medication to the inventory?(y/n)');
                choice1 = prompt();
            }
            break;

        // option 4 allows the pharmacist to view the inventory
        case 4:
            inventory.forEach(function(entry) {
                console.log(entry);
            });
            break;

        // option 5 quits the app by setting the running variable to false therefore terminating the while loop
        case 5:
            console.log('Thank you for using the inventory management system');
            running = false;
            break;

        // default, in case the input is other than 1-5, prints a message
        default:
            console.log("Invalid input, please try again.")
            break;
    }
}