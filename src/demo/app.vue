<template>
   <div id="app">
      <ul>
         <li>
            <router-link to="/task-edit-path">test edit task</router-link>
         </li>
         <li>
            <router-link to="/task-display-path">test display task</router-link>
         </li>
                  <li>
            <router-link to="/task-list-path">test list task</router-link>
         </li>
      </ul>
      <div>
         <router-view class="view"/>
      </div>
   </div>
</template>
