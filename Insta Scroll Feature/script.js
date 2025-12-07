const reels = [
  {
    username: "tech_guru",
    isfollowed: false,
    isliked: true,
    reeltitle: "This Gadget Will Blow Your Mind! You’ll Never Look at Tech the Same Way Again",
    userimage: "./photo.jpg",
    video: "./video/reel1.mp4",
    likeCount: 1520,
    commentCount: 87
  },
  {
    username: "fit_mania",
    isfollowed: true,
    isliked: false,
    reeltitle: "Only 5 Minutes a Day! This Home Workout Changed My Body Completely",
    userimage: "https://picsum.photos/seed/u2/200",
    video: "video/reel2.mp4",
    likeCount: 980,
    commentCount: 44
  },
  {
    username: "foodie_fun",
    isfollowed: false,
    isliked: false,
    reeltitle: "I Tried This Viral Street Food Hack and the Result Totally Shocked Me",
    userimage: "https://picsum.photos/seed/u3/200",
    video: "video/reel3.mp4",
    likeCount: 2310,
    commentCount: 129
  },
  {
    username: "travel_monk",
    isfollowed: true,
    isliked: true,
    reeltitle: "Hidden Paradise in Goa You’ve Never Seen! Locals Don’t Want You to Know This",
    userimage: "https://picsum.photos/seed/u4/200",
    video: "video/reel5.mp4",
    likeCount: 4521,
    commentCount: 210
  },
  {
    username: "dance_vibes",
    isfollowed: false,
    isliked: false,
    reeltitle: "This Dance Move Is Going Viral Everywhere! Can You Do It Better?",
    userimage: "https://picsum.photos/seed/u5/200",
    video: "video/reel6.mp4",
    likeCount: 1790,
    commentCount: 62
  },
  {
    username: "coding_boy",
    isfollowed: false,
    isliked: true,
    reeltitle: "One JavaScript Trick Every Beginner Must Learn! I Wish I Knew This Earlier",
    userimage: "https://picsum.photos/seed/u6/200",
    video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    likeCount: 134,
    commentCount: 12
  },
  {
    username: "nature_snapper",
    isfollowed: true,
    isliked: false,
    reeltitle: "Nature at Its Best! You Won’t Believe This View Exists on Earth",
    userimage: "https://picsum.photos/seed/u7/200",
    video: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    likeCount: 2987,
    commentCount: 154
  },
  {
    username: "pet_world",
    isfollowed: true,
    isliked: true,
    reeltitle: "Cutest Puppy Compilation Ever! Your Heart Will Melt Watching This",
    userimage: "https://picsum.photos/seed/u8/200",
    video: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
    likeCount: 5240,
    commentCount: 310
  },
  {
    username: "daily_quotes",
    isfollowed: false,
    isliked: false,
    reeltitle: "This Motivation Quote Hit Hard! Listen to This Before You Give Up",
    userimage: "https://picsum.photos/seed/u9/200",
    video: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
    likeCount: 1120,
    commentCount: 38
  },
  {
    username: "style_icon",
    isfollowed: true,
    isliked: false,
    reeltitle: "Fashion Tips They Never Tell You! This One Change Will Upgrade Your Look",
    userimage: "https://picsum.photos/seed/u10/200",
    video: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    likeCount: 2090,
    commentCount: 95
  }
];

const allreels = document.querySelector(".allreels")
let sub = ""
reels.forEach(elem=>{
    sub += ` <div class="reel">
                <video lazyloading muted autoplay loop src="${elem.video}"></video>
                <div class="bottom">
                    <div class="user">
                        <img src="${elem.userimage}" alt="">
                        <span>${elem.username}</span>
                        <button class="cursor">${elem.isfollowed? "Unfollow":"Follow"}</button>
                    </div>
                    <h2>${elem.reeltitle}</h2>
                </div>
                <div class="right">
                    <div class="like">
                        ${elem.isliked? '<i class="love ri-heart-3-fill"></i>':"<i class='ri-heart-3-line'></i>"}
                        <span>456</span>
                    </div>
                    <div class="comment">
                        <i class="ri-chat-3-line"></i>
                        <span>${elem.commentCount}</span>
                    </div>
                    <div class="share">
                        <i class="ri-share-forward-line"></i>
                    </div>
                    <div class="menu">
                        <i class="ri-more-2-fill"></i>
                    </div>
                </div>
            </div>`
})

allreels.innerHTML = sub