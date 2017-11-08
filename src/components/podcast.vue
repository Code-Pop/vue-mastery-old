<template>
<div class='column'>
    <div class='box content'>
        <h4 class='title is-5'>Listen to the Vue Podcast</h4>
        <audio controls>
            <source :newsIssue="newsIssue" :src='newsIssue.audio_file' type='audio/mpeg'>
        </audio>
        <p>Adam &amp; Gregg discuss weekly Vue news.</p>
        <a class='button is-link' href='javascript:;'>Subscribe on iTunes</a>
    </div>
</div>
</template>

<script>
export default {
  name: 'Podcast',
  props: ['newsIssue']
}
</script>