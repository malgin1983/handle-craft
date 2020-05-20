import { Schema, model, Types, Document} from 'mongoose'

export interface IUser extends Document {
        name: string;
        password: string;
        links: string;
};

const schema = new Schema  ({
        firstName: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        links: [
            {
               type: Types.ObjectId,
               ref: 'Link'
            }
        ]
})
const User =  model<IUser>('User', schema)
export default User;