const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/helper');

// thought schema
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema],
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

// virtual to get the reaction count
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// creates an instance of the Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;