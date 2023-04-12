<script setup>
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";

import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";

import quizes from "../data/quizes.json";

const route = useRoute();

const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);

const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);

// when a Ref is based on another Ref, computed is recommended, but not
const questionStatus = computed(
  () => `${currentQuestionIndex.value}/${quiz.questions.length}`
);

const barPercentage = computed(
  () => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`
);

const onOptionSlected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }
  currentQuestionIndex.value++;
};
</script>

<template>
  <div>
    <QuizHeader
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <div>
      <Question
        :question="quiz.questions[currentQuestionIndex]"
        @selectOption="onOptionSlected"
      />
    </div>
    <p>numberOfCorrectAnswers: {{ numberOfCorrectAnswers }}</p>
  </div>
</template>
