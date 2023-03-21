<template>
  <div class="achievements">
    <ul>
      <li v-for="(achievement, index) in achievements.getCompleted" :key="index">
        <h4>{{ achievement.name }}</h4>
        <p>{{ achievement.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useAchievements } from '../composables/useAchievements'
const achievements = useAchievements()
</script>