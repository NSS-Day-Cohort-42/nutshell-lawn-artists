import { TaskList } from "./tasks/TaskList.js";
import "./tasks/TaskForm.js";
import { ListFriends } from "./friends/FriendList.js"
import { ListArticles } from "./articles/ArticleList.js"
import "./friends/FriendForm.js"
import { getForecast } from "./weather/WeatherProvider.js";
import "./weather/WeatherList.js"


export const Nutshell = () => {
    TaskList() 
    ListFriends()
    ListArticles()
    getForecast()
    // Render all your UI components here
}