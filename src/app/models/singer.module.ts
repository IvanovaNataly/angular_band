export default class Singer {
    constructor(
        public name: string,
        public image: string
    ) {}

    isIndian: boolean;

    isAmerican() {
        return ( this.isIndian ? false : true );
    }

}