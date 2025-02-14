const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";
const postsContainer = document.getElementById("posts-container");

const allCategories = {
  299: {
    category: "Career Advice",
    className: "career",
  },
  409: {
    category: "Project Feedback",
    className: "feedback",
  },
  417: {
    category: "freeCodeCamp Support",
    className: "support",
  },
};

const forumCategory = (id) => {
  let selectedCategory = {};
  if (allCategories.hasOwnProperty(id)) {
    const { category, className } = allCategories[id];
    selectedCategory.className = className;
    selectedCategory.category = category;
  }
};

const timeAgo = (time) => {
  const currentTime = new Date();
  const lastPost = new Date(time);
  const timeDifference = currentTime - lastPost;
  const minutes = Math.floor(timeDifference / 60000);
  const hours = Math.floor(timeDifference / 3600000);
  const days = Math.floor(timeDifference / 86400000);

  if (minutes < 60) {
    return `${minutes}m ago`;
  } else if (hours < 24) {
    return `${hours}h ago`;
  } else {
    return `${days}d ago`;
  }
};

const viewCount = (views) => {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  } else {
    return views;
  }
};

const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
};
fetchData();

const showLatestPosts = (data) => {
  const { topic_list, users } = data;
  const { topics } = topic_list;
  postsContainer.innerHTML = topics
    .map((item) => {
      const {
        id,
        title,
        views,
        posts_count,
        slug,
        posters,
        category_id,
        bumped_at,
      } = item;
      return `<tr>
      <td>
      <p class="post-title">${title}</p>
      </td>
      <td></td>
      <td>
      ${posts_count - 1}
      </td>
      <td>${viewCount(views)}</td>
      <td>
      ${timeAgo(bumped_at)}
      </td>
        </tr>`;
    })
    .join("");
};
