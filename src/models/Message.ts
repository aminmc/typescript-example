
export default class Message {
    private readonly content: string;

    constructor(content: string) {
       this.content = content;
    }

    public getContent() : string {
        return this.content;
    }

}
