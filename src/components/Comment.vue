<template>
  <div class="comment-container">
    <div class="avatar">
        <img src="https://static-00.iconduck.com/assets.00/reddit-icon-2048x2048-ya82zt8l.png" alt="avatar">
        <div class="trackline"></div>
    </div>
    <div class="details">
        <div class="username">
            <p>{{username}}</p>
        </div>
        <div class="comment">
            <p>{{comment}}</p>
        </div>
        <div v-if="replies">
            <Comments :comments="replies"/>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Comment',
    components: {
    },
    props: {
        replies: {
            type: [Boolean, Object],
            default: false
        },
        username: {
            type: String,
            default: ''
        },
        comment: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>
.comment-container{
    display: flex;
    gap: 0.5rem;
}
.avatar{
    width: 2rem;
    overflow: hidden;
    flex-shrink: 0;
}
img{
    width: 100%;
    border-radius: 100px;

}
p{
    margin: 0;
}
.details{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
</style>