export default class SingerModel {
    constructor(
        public name: string,
        public image: string,
        public videoUrl?: string
    )
    {
        if (this.videoUrl) this.addVideoUrl(this.videoUrl);
    }

    addVideoUrl(url: string) {
        this.videoUrl = url;
        return this.videoUrl;
    }

}