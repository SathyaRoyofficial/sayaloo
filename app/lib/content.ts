export const content = {
    intro: {
        title: "I have something important to ask you...",
        buttonText: "Continue",
    },
    reasons: {
        title: "Why You Are Special To Me",
        items: [
            "You make my world brighter every single day.",
            "You understand me like no one else does.",
            "You are my safe place when things get tough.",
            "You are my everything.",
        ]
    },
    memory1: {
        question: "Do you remember when our love story officially began?",
        type: "date",
        correctDate: "2023-11-14", // Example date, Admin should change this
        hint: "Our special day ❤️",
        wrongMessage: "Try again, I know you remember 😉",
    },
    timeline: [
        { date: "2023", title: "Sep 1", description: "A thread tied, but destiny had already chosen us..." },
        { date: "2023", title: "Sep 10", description: "A quiet birthday kindness, from a heart learning your name." },
        { date: "2023", title: "Nov 14", description: "Where our story found its first breath.." },
        { date: "2023", title: "Dec 11", description: "my heart fit you better than the fabric." },
        { date: "2023", title: "Dec 15", description: "Two of us.One campus. A thousand unspoken feelings.." },
        { date: "2023", title: "Dec 15", description: "You leaned on my shoulder — the world felt suddenly lighter." },
        { date: "2023", title: "Dec 16", description: "Two hearts met, and nothing stayed the same again" },
        { date: "Now", title: "Forever", description: "Writing our future." },
    ],
    memory2: {
        question: "Where did we first meet?",
        type: "choice",
        options: ["AB2-F1", "AB2-F2", "AB2-F3", "AB2-F4"],
        correctAnswer: "AB2-F1", // Admin should change this
        wrongMessage: "Not quite! Think back... 🤔",
    },
    gallery: [
        "/assets/images/bubududumovie.jpg",
        "/assets/images/bubududubike.jpg",
        "/assets/images/bubududuring.jpg",
    ],
    memory3: {
        question: "What is my favorite thing about you?",
        type: "text",
        correctAnswers: ["Your smile", "Smile", "Your eyes", "Eyes"], // Case insensitive check
        hint: "It lights up the room  which isn't visible for you!",
        wrongMessage: "Close! But that's not the #1 thing 🥰",
    },
    letter: `From the moment you entered my life, everything changed. 
  
  You brought color to my grey days and music to my quiet nights. Every smile you share with me is a treasure I hold dear.
  
  I want to spend every sunrise and sunset with you. I want to build a life where our dreams intertwine and our hearts beat as one.
  
  You are my best friend, my confidant, and my greatest love.`,

    audio: "/assets/audio/welove.mp3",

    heartCheckpoint: {
        question: "Do you trust me with your heart forever?",
        type: "buttons", // Changed to "buttons" from user's manual edit which removed it unintentionally? Checked user diff, type wasn't removed.
        options: ["YES ❤️", "ALWAYS 🥰"],
        // Both imply yes, loop if neither? No, just unlock.
    },

    video: "/assets/videos/Render.mp4",

    finalLock: {
        question: "Are you ready for the most important question of your life?",
        type: "buttons",
        options: ["I AM READY ❤️", "TELL ME 😍"],
    },

    proposal: {
        question: "Will You Be My Valentine?", // Or Will You Marry Me?
        confirmText: "YES",
        rejectText: "OF COURSE", // Both are positive
    },
};
