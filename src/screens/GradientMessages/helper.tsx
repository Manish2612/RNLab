import _ from 'lodash';

export type MessageType = {
    status: string,
    message: string,
}

export const conversation = [
    {
        status: 'sent',
        message: 'Hey Lio!'
    },
    {
        status: '',
        message: 'Hi Julia'
    },
    {
        status: 'sent',
        message: 'What did you think of the Movie?'
    },
    {
        status: '',
        message: 'I think it was terrible'
    },
    {
        status: 'sent',
        message: `What!!`
    },
    {
        status: 'sent',
        message: `I think it was really good. Why didn't you like it?`
    },
    {
        status: '',
        message: 'The acting was bad. Story was boring and music was too loud.'
    },
    {
        status: 'sent',
        message: `I disagree. I liked the main actor and story was intresting.\nAlso I loved the poetic end of movie and poem.\nTyger Tyger, burning bright,\nIn the forests of the night,\nWhat immortal hand or eye,\nCould frame thy fearful symmetry?`
    },
    {
        status: '',
        message: 'Intresting? Story was so predictable.'
    },
    {
        status: 'sent',
        message: 'May be. But I saw you crying at the end.'
    },
    {
        status: '',
        message: 'I did not Cry!'
    },
    {
        status: 'sent',
        message: 'I saw you!'
    },
    {
        status: '',
        message: 'Okay! May be I cried a little. but that doesnt mean it was a good movie.'
    },
    {
        status: 'sent',
        message: 'In your opinion, what was a good movie? what is be best movie you have even seen?'
    },
    {
        status: '',
        message: 'Spiderman'
    },
    {
        status: 'sent',
        message: `That's a comic book movie.`
    },
    {
        status: '',
        message: 'So??'
    },
    {
        status: 'sent',
        message: 'What is your favourite real movie? about real people?'
    },
    {
        status: '',
        message: 'Truth is, I dont like movies.'
    },
    {
        status: 'sent',
        message: `Well, next time just save money and let's watch Videos at home on Youtube and Facebook!`
    },
];
