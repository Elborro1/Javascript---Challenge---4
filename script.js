const day = 'monday';

// switch (day) {
//     case 'monday' : // strict (monday === day)
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday' :
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday' :
//     case 'thursday' :
//         break;
//         console.log('Write code');
//     case 'friday' :
//         console.log('Record videos');
//         break;
//     case 'saturday' :
//     case 'sunday' :
//         console.log('Relax');
//         break;
//     default:
//         console.log('Not a valid day');


if(day === 'monday'){
    console.log('Plan course structure','Go to coding meetup');
} else if(day === 'tuesday'){
    console.log('Prepare theory videos')
} else if(day === 'wednesday' || day === 'thursday'){
    console.log('write code')
} else if(day === 'friday'){
    console.log('Record videos')
} else if(day === 'saturday' || day === 'sunday'){
    console.log( 'Relax')
} else{
    console.log('Not a valid day');

}

