const search = document.getElementById('search');
const input = document.querySelector('.input');
const bio = document.getElementById('bio');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
const repos = document.getElementById('repos');
const link = document.getElementById('link');
const userName = document.getElementById('name');
const mainImg = document.querySelector('.img');
const container = document.querySelector('.container');
const blog = document.querySelector('.blog');;

search.addEventListener('click', searchBtn);


function searchBtn(e) {
  e.preventDefault();
  const inputName = input.value;
  const api = `https://api.github.com/users/${inputName}`;
  console.log(input.value);
  axios(api).then(function (data) {
    getResult(data)
  });

  input.value = '';
  container.classList.remove('hidden');
  const repos = `https://api.github.com/users/${inputName}/repos`
  axios(repos).then(function (data) {
    showResult(data)
  });
};

function showResult(useData) {

  useData.data.forEach((aRepo) => {
    const createA = document.createElement('h3');
    link.appendChild(createA)
    createA.innerHTML = `<a href="${aRepo.html_url}">${aRepo.name}<a>`
  });
};

function getResult(useData) {

  const maine = document.createElement('div'){
    <div
  }
  const createH3 = document.createElement('h3');
  blog.appendChild(createH3);
  mainImg.src = useData.data.avatar_url;
  createH3.innerHTML = `<a href="${useData.data.blog}">linkedin.com</a>`;
  userName.textContent = useData.data.name;
  bio.textContent = useData.data.bio;
  followers.textContent = `${useData.data.followers} followers`;
  following.textContent = `${useData.data.following} following`;
  repos.textContent = `${useData.data.public_repos} repos`;
};
