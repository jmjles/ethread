import { CommunityProps } from "components/community/Community";
import { PostProps } from "components/post/Post";

export const threadPosts = [
  {
    title: "Exploring the Unknown",
    subtitle: "Unveiling mysteries beyond our imagination",
    img: "https://picsum.photos/seed/Exploring+the+Unknown/300",
    topic: "Science and Discovery",
    topics: true,
  },
  {
    title: "A Culinary Adventure",
    subtitle: "From kitchen experiments to gourmet delights",
    img: "https://picsum.photos/seed/A+Culinary+Adventure/300",
    topic: "Food and Cooking",
    topics: true,
  },
  {
    title: "Through the Lens",
    subtitle: "Capturing moments that last a lifetime",
    img: "https://picsum.photos/seed/Through+the+Lens/300",
    topic: "Photography",
    topics: true,
  },
  {
    title: "Beyond the Pages",
    subtitle: "Diving into the world of literature",
    img: "https://picsum.photos/seed/Beyond+the+Pages/300",
    topic: "Literature and Books",
    topics: true,
  },
  {
    title: "Mindful Living",
    subtitle: "Embracing the present moment",
    img: "https://picsum.photos/seed/Mindful+Living/300",
    topic: "Wellness and Mindfulness",
    topics: true,
  },
  {
    title: "Tech Talk",
    subtitle: "Navigating the digital landscape",
    img: "https://picsum.photos/seed/Tech+Talk/300",
    topic: "Technology Trends",
    topics: true,
  },
  {
    title: "Musical Harmony",
    subtitle: "Notes that resonate with the soul",
    img: "https://picsum.photos/seed/Musical+Harmony/300",
    topic: "Music and Harmony",
    topics: true,
  },
  {
    title: "Fitness Fusion",
    subtitle: "Blending workouts for a healthier you",
    img: "https://picsum.photos/seed/Fitness+Fusion/300",
    topic: "Health and Fitness",
    topics: true,
  },
  {
    title: "Green Thumb Chronicles",
    subtitle: "Cultivating a garden of possibilities",
    img: "https://picsum.photos/seed/Green+Thumb+Chronicles/300",
    topic: "Gardening and Nature",
    topics: true,
  },
  {
    title: "Cosmic Wonders",
    subtitle: "Journey through the vastness of space",
    img: "https://picsum.photos/seed/Cosmic+Wonders/300",
    topic: "Astronomy and Space",
    topics: true,
  },
];

export const Threads: PostProps[] = [
  {
    user: {
      id: "1",
      avatar: "tech-avatar.jpg",
      displayName: "TechGeek",
      following: true,
    },
    title: "Exciting Advances in Artificial Intelligence",
    content:
      "Explore the latest breakthroughs in artificial intelligence, delving into their profound impact on diverse industries. Engage in discussions on evolving AI technologies, applications, and their implications for the future. Share your insights and learn from fellow enthusiasts passionate about the ever-expanding realm of technology.",
    type: "thread",
    topic: "Technology",
    date: "2024-01-25",
  },
  {
    user: {
      id: "2",
      avatar: "book-club-avatar.jpg",
      displayName: "BookWorm",
      following: true,
    },
    title: "Book Recommendations for February",
    content:
      "Calling all book lovers! Share and discover captivating reads for February. Provide detailed insights into your favorite novels, highlighting plot twists, character developments, and the emotions they evoke. Let's create a vibrant community where literary enthusiasts can connect, recommend, and immerse themselves in the world of books.",
    type: "thread",
    topic: "Books",
    date: "2024-01-25",
  },
  {
    user: {
      id: "3",
      avatar: "fitness-avatar.jpg",
      displayName: "FitLife",
      following: true,
    },
    title: "Weekly Fitness Challenge - Join Us!",
    content:
      "Embark on a fitness journey with our weekly challenges! Share your workout routines, healthy recipes, and personal achievements. Encourage fellow members in their pursuit of a healthier lifestyle. Together, let's build a supportive community that inspires and motivates each other to stay active and prioritize well-being.",
    type: "thread",
    topic: "Fitness",
    date: "2024-01-25",
  },
  {
    user: {
      id: "4",
      avatar: "travel-avatar.jpg",
      displayName: "Wanderlust",
      following: true,
    },
    title: "Hidden Gems Around the World",
    content:
      "Uncover hidden gems and off-the-beaten-path destinations worldwide. Share your travel tales, insider tips, and breathtaking photos. From quaint villages to scenic landscapes, let's celebrate the beauty of exploration. Connect with fellow adventurers, exchange recommendations, and embark on a virtual journey to discover the wonders of our diverse planet.",
    type: "thread",
    topic: "Travel",
    date: "2024-01-25",
  },
  {
    user: {
      id: "5",
      avatar: "music-avatar.jpg",
      displayName: "MelodyMaster",
      following: true,
    },
    title: "Favorite Albums of the Decade",
    content:
      "Dive into the world of music and reminisce about the past decade's iconic albums. Share your personal favorites, discuss the evolution of genres, and explore the impact of these musical masterpieces. Whether it's rock, pop, or indie, let's create a symphony of discussions around the albums that have left a lasting imprint on our hearts.",
    type: "thread",
    topic: "Music",
    date: "2024-01-25",
  },
  {
    user: {
      id: "6",
      avatar: "gaming-avatar.jpg",
      displayName: "GameGuru",
      following: true,
    },
    title: "Upcoming Game Releases and Predictions",
    content:
      "Gear up for an exciting discussion on the gaming horizon! Explore upcoming game releases, share insights on anticipated titles, and make predictions about the future of the gaming industry. Whether you're a seasoned gamer or a casual player, join us in forecasting the next big hits and unraveling the mysteries of the gaming universe.",
    type: "thread",
    topic: "Gaming",
    date: "2024-01-25",
  },
];

export const CommunitiesData: CommunityProps[] = [
  {
    avatar: "https://picsum.photos/seed/Awesome+Team/64/64",
    name: "Awesome Team",
    id: "1",
  },
  {
    avatar: undefined,
    name: "Creative Squad",
    id: "2",
  },
  {
    avatar: "https://picsum.photos/seed/Energetic+Community/64/64",
    name: "Energetic Community",
    id: "3",
  },
  {
    avatar: undefined,
    name: "Dynamic Alliance",
    id: "4",
  },
  {
    avatar: "https://picsum.photos/seed/Fantastic+Team/64/64",
    name: "Fantastic Team",
    id: "5",
  },
  {
    avatar: undefined,
    name: "Creative Group",
    id: "6",
  },
  {
    avatar: "https://picsum.photos/seed/Awesome+Alliance/64/64",
    name: "Awesome Alliance",
    id: "7",
  },
  {
    avatar: undefined,
    name: "Energetic Team",
    id: "8",
  },
  {
    avatar: "https://picsum.photos/seed/Dynamic+Community/64/64",
    name: "Dynamic Community",
    id: "9",
  },
  {
    avatar: undefined,
    name: "Fantastic Squad",
    id: "10",
  },
];
