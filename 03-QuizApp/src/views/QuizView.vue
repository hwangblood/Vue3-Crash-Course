<script setup>
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";

import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import Result from "../components/Result.vue";

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
  if (quiz.questions.length - 1 === currentQuestionIndex.value) {
    isQuizCompleted.value = true;
  }
  currentQuestionIndex.value++;
};

// once quiz is completed, show the result of questions
const isQuizCompleted = ref(false);
</script>

<template>
  <div>
    <QuizHeader
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <div>
      <Question
        v-if="!isQuizCompleted"
        :question="quiz.questions[currentQuestionIndex]"
        @selectOption="onOptionSlected"
      />
      <Result
        v-else
        :quizQuestionLength="quiz.questions.length"
        :numberOfCorrectAnswers="numberOfCorrectAnswers"
      />
    </div>
  </div>
</template>
