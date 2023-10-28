//switch

let dayUserInput = prompt('What day is today?');
let day = dayUserInput.toLowerCase();

switch(day)
{
        case 'sunday':
            console.log('Sunday');
            break;

        case 'monday':
            console.log('Monday');
            break;

        case 'tuesday':
            console.log('Tuesday');
            break;

        case 'wednesday':
            console.log('Wednesday');
            break;

        case 'thursday':
            console.log('Thursday');
            break;
        
        case 'friday':
            console.log('Friday');
            break;

        case 'saturday':
            console.log('Saturday');
            break;

        default:
            console.log("It is not a week day");
            break;
}