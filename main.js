const simpsons = {
    "Homer": [
        'I\’ve learned that life is one crushing defeat after another until you just wish Flanders was dead.',

        'A gun is not a weapon, it\’s a tool, like a hammer or a screwdriver or an alligator.',

        'Oh yeah, what are you gonna do? Release the dogs? Or the bees? Or the dogs with bees in their mouths and when they bark, they shoot bees at you?',

        'Volunteering is for suckers. Did you know that volunteers don\’t even get paid for the stuff they do.',

        'Oh, I have three kids and no money. Why can\’t I have no kids and three money?', 

        'I\’m normally not a praying man, but if you\’re up there, please save me Superman.',

        'It\’s so simple to be wise… just think of something stupid to say and then don\’t say it.',
        'To alcohol! The cause of, and solution to, all of life\’s problems.'
        ],

    'Marge': [
        'Hello, room service? This is Marge Simpson! I\’d like a banana fudge sundae. With whipped cream! And some chocolate chip cheesecake. And a bottle of tequila!', 
        
        'I don\’t mind if you pee in the shower, but only if you\’re taking a shower.', 
        
        'You should listen to your heart, and not the voices inside your head.', 
        
        'Bart! Stop pestering Satan.', 
        
        'And all this time I thought “Googling yourself” meant the other thing.'],

    'Bart': [
        'Eat My Shorts!',

        'Don\'t Have a Cow, Man!',

        '¡Ay, caramba!',

        'You got the brains and talent to go as far as you want and when you do, I’ll be right there to borrow money.',

        'That\’s not fair! I\’m ten times the Krusty fan you are. I even have the Krusty Home Pregnancy test!',

        'I didn\’t think it was physically possible, but this both sucks and blows.'

    ],

    'Lisa': [
        'Shut up, brain! I\’ve got friends now. I don\’t need you anymore.',

        'Stupid bus that can\’t even go to the stupid place it\’s supposed to stupid go.'
    ],

    'Mr. Burns': [
        'Family, Religion, Friendship. These Are The Three Demons You Must Slay If You Wish To Succeed In Business.',

        'Simpson, eh? I\'ll remember that name.',

        'Now, a few more details about this year\'s company picnic. It\'s at the plant, no food will be served, the activity will be work and the picnic is cancelled.'
    ],
    
    'Apu': [
        'That is a great dishonor to my ancestors and my gods. But okay!',

        'Thank you, come again.',

        'Please pay for your purchases, get out, and come again!',

        'Silly customer. You cannot hurt the Twinkie!'
    ],

    'Krusty the Clown': [
        'A joke, ah...oh....ok! A man walks into a bar with a small piano, and a twelve inch pianist.....whooaaa hooaaa...I can\'t tell that one!!...huh huh huh huh huh!',

        'There\'s nothing better than a cigar lit with a hundred dollar bill!',

        'You know, I\'d like to thank god for all of my success. Even though I never worshipped or believed in him in any way.'
    ],

    'Milhouse': [
        'But my mom says I\'m cool.',

        'Trust me, Bart, it\'s better to walk in on both your parents than on just one of them.',

        'No way, Bart. If I lean over, I leave myself open to wedgies, wet willies, or even the dreaded rear-admiral!',

        'Wow! I bet if God wore pants, he\'d have a belt like that'
    ],

    'Sideshow Bob': [
        'Rakes, My Arch Enemy.',

        'Mayor Quimby Even Released Sideshow Bob — A Man Twice Convicted Of Attempted Murder. Can You Trust A Man Like Mayor Quimby? Vote Sideshow Bob For Mayor.',

        'Bart, if I wanted to kill you I\'d of choked you like a chicken as soon as I walked in that door but then what kind of a guest would I have been?'
    ],

    'Ned Flanders': [
        'Hi diddly ho neighborinos!',

        'He\'s a hero all right, a hero sandwich full of bologna!',

        'Now I know you\'ve had a few too many waters, but that is no reason for the sailor talk.',

        'I\'ve done everything the Bible says - even the stuff that contradicts the other stuff!'
    ]


};

let getRandomChar = () => {
    // stores all keys in array
    const char = Object.keys(simpsons);
    //returns a key from char array
    return char[Math.floor(Math.random() * char.length)];
}
//console.log(`Your charactor is: ${getRandomChar()}`);

let getRandomQuote = () => {
    const char = getRandomChar();
    let quote = '';
    if (char === 'Homer') {
        // goes into array assined to charactor and selects random quote
        quote = simpsons.Homer[Math.floor(Math.random() * simpsons.Homer.length)];
    } else if (char === 'Marge') {
        quote = simpsons.Marge[Math.floor(Math.random() * simpsons.Marge.length)];
    } else if (char === 'Bart') {
        quote = simpsons.Bart[Math.floor(Math.random() * simpsons.Bart.length)];
    } else if (char === 'Lisa') {
        quote = simpsons.Lisa[Math.floor(Math.random() * simpsons.Lisa.length)];
    } else if (char === 'Mr. Burns') {
        quote = simpsons["Mr. Burns"][Math.floor(Math.random() * simpsons["Mr. Burns"].length)];
    } else if (char === 'Apu') {
        quote = simpsons.Apu[Math.floor(Math.random() * simpsons.Apu.length)];
    } else if (char === 'Krusty the Clown') {
        quote = simpsons["Krusty the Clown"][Math.floor(Math.random() * simpsons["Krusty the Clown"].length)]
    } else if (char === 'Milhouse') {
        quote = simpsons.Milhouse[Math.floor(Math.random() * simpsons.Milhouse.length)];
    } else if (char === 'Sideshow Bob') {
        quote = simpsons["Sideshow Bob"][Math.floor(Math.random() * simpsons["Sideshow Bob"].length)];
    } else if (char === 'Ned Flanders') {
        quote = simpsons["Ned Flanders"][Math.floor(Math.random() * simpsons["Ned Flanders"].length)];
    }
    
    return `Your charactor is: ${char} and their quote is: ${quote}`;
    
}


console.log(getRandomQuote());