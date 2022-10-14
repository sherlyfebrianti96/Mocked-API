import { faker } from '@faker-js/faker';
import Video from '../consts/Video';
import resolutions from '../consts/videoResolutions';

const getVideo = () => {
    const video : Video = {
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        date: faker.date.past(),
        author: faker.name.fullName(),
        views: faker.datatype.number(),
        likes: 0,
        dislikes: 0,
        runtimeSeconds: faker.datatype.number(),
        maxQuality: resolutions[Math.floor(Math.random() * resolutions.length)],
    }

    video.likes = Math.max(video.views, faker.datatype.number());
    video.dislikes = Math.max(video.views - video.likes, faker.datatype.number());

    return video;
}

export default getVideo;