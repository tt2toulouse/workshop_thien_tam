<template>
   <div id="app">
      <ul>
         <li>
            <router-link to="/task-edit-path">test edit task</router-link>
         </li>
      </ul>
      <div>
         <router-view class="view"/>
      </div>
   </div>
</template>
