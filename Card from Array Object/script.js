const people = [
  {
    fullName: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=300&auto=format&fit=crop&q=60",
    profession: "Software Developer",
    description: "Specializes in full-stack web development and building scalable cloud apps.",
    tags: ["developer", "javascript", "web", "tech"]
  },
  {
    fullName: "Riya Verma",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=60",
    profession: "Graphic Designer",
    description: "Creates modern, minimalistic branding and digital illustrations.",
    tags: ["designer", "branding", "illustration", "ui"]
  },
  {
    fullName: "Kabir Singh",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&auto=format&fit=crop&q=60",
    profession: "Data Analyst",
    description: "Works with big data tools and transforms raw data into clear insights.",
    tags: ["data", "analytics", "python", "insights"]
  },
  {
    fullName: "Meera Nair",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&auto=format&fit=crop&q=60",
    profession: "Content Writer",
    description: "Writes SEO-optimized content and engaging brand stories.",
    tags: ["writer", "seo", "content", "blogs"]
  },
  {
    fullName: "Arjun Mehta",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=300&auto=format&fit=crop&q=60",
    profession: "Fitness Trainer",
    description: "Helps clients achieve strength and conditioning goals.",
    tags: ["fitness", "trainer", "health", "workout"]
  },
  {
    fullName: "Sanya Kapoor",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=300&auto=format&fit=crop&q=60",
    profession: "Digital Marketer",
    description: "Runs high-ROI ad campaigns and manages social media strategies.",
    tags: ["marketing", "ads", "social-media", "strategy"]
  },
  {
    fullName: "Devansh Patel",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&auto=format&fit=crop&q=60",
    profession: "Photographer",
    description: "Specializes in portrait and event photography with a cinematic style.",
    tags: ["photography", "camera", "editing", "events"]
  },
  {
    fullName: "Neha Joshi",
    image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=300&auto=format&fit=crop&q=60",
    profession: "UI/UX Designer",
    description: "Designs intuitive interfaces focusing on user behavior and accessibility.",
    tags: ["uiux", "design", "figma", "wireframes"]
  },
  {
    fullName: "Raghav Malhotra",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&auto=format&fit=crop&q=60",
    profession: "Chef",
    description: "Creates fusion dishes combining traditional and modern techniques.",
    tags: ["chef", "food", "cooking", "recipes"]
  },
  {
    fullName: "Ira Desai",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=60",
    profession: "Psychologist",
    description: "Counsels individuals on stress, mindset development, and emotional health.",
    tags: ["psychology", "mental-health", "counseling", "mindset"]
  }
];

let main = document.querySelector("main")

people.forEach(function(elem){
    let sum = document.createElement("div")
    sum.classList.add("card")

    sum.innerHTML = `<div class="pp"><img src="${elem.image}" alt=""></div>
            <h3>${elem.fullName}</h3>
            <h5>${elem.profession}</h5>
            <p>${elem.description}</p>`

    main.appendChild(sum)
    
})