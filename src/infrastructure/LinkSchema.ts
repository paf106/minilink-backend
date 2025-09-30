import * as mongoose from 'mongoose';

const linkSchema = new mongoose.Schema(
    {

        url: {type: String, required: true},
        shortCode: {type: String, required: true, unique: true},
        createdAt: {type: Date, default: Date.now},
    },
    {
        timestamps: true,
        collection: 'links',
    }
);

export type Link = mongoose.InferSchemaType<typeof linkSchema>;
export const Link = mongoose.model('Link', linkSchema);
