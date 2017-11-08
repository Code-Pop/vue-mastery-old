<template>
  <div>
    <news-issue />
    <news-issue />
    <news-issue />
    <news-issue />
  </div>
</template>

<script>
import NewsIssue from '@/components/news-issue'

export default {
  components: {
    NewsIssue
  },
  name: 'News'
}
</script>

