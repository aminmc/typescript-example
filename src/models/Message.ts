import {IsNotEmpty} from 'class-validator';

export default class Message {
    @IsNotEmpty({message: 'Content for this message cannot be null or empty'})
    private readonly content: string;

    constructor(content: string) {
       this.content = content;
    }

    public getContent() : string {
        return this.content;
    }

}
