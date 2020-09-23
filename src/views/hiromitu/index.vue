<template>
    <div class="jp__index">
        <div class="juku_page">
            <div class="profile">
                <AvatarImage :src="img" class="--l" />
                <LinkButton text="お申し込み" class="--fill" @click.native="to_enrollment" />
                <div class="text_profile">
                    <div class="name">{{ name }}</div>
                    <div class="address">{{ address }}</div>
                    <StarRating :rate="rate" />
                    <div class="bio">{{ bio }}</div>
                </div>
            </div>

            <div class="switch_bar">
                <div class="content" v-for="(c, i) in categories" :key="i" @click="click_category(c.url)" :class="{display: display_content == c.url}">
                    {{ c.category }}
                </div>
            </div>
        </div>
        <div class="thumbs">
            <div class="thumb" v-for="(thumb, i) in thumbs" :key="i" @click="to_movie_page">
                <img :src="thumb" alt="" class="thumb__img">
            </div>
        </div>
        
    </div>
</template>


<style lang="scss">
@media screen and (max-width: $max-width-sp) {
    .juku_page {
        .profile {
            padding: 8vw $margin-side-sp 0;
            position: relative;
            margin-bottom: 8vw;

            .link_button {
                position: absolute;
                right: 4vw;
                top: 16.5vw;
                font-size: $fos-ml-sp;
            }

            .text_profile {

                .name {
                    font-size: $fos-3l-sp;
                    margin: 2vw 0 0.5vw;
                }

                .address {
                    color: $color-light;
                    margin-bottom: 0.2vw;
                }

                .bio {
                    margin-top: 3vw;
                }
            }
        }

        .switch_bar {
            border-top: solid thin $color-border;
            border-bottom: solid thin $color-border;
            display: flex;
            justify-content: space-evenly;
            padding: 1vw 0;
            font-size: $fos-l-sp;
            color: $color-light;
            margin-bottom: 10vw;
            
            .content {
                padding: 1.3vw 3vw;

                &.display {
                    color: white;
                    background: $color-normal;
                    border-radius: 5vw;
                }
            }
        }
    }
    .jp__index {
        .thumbs {
            display: flex;
            overflow-x: scroll;
            overflow-y: hidden;
            
            .thumb {
                .thumb__img {
                    width: 35vw;
                    height: calc(35vw * 4 / 3);
                    object-fit: cover;
                    margin-right: 0.5vw;
                }

                &:first-child {
                    margin-left: $margin-side-sp;
                }
            }
        }
        
    }
}
</style>


<script>
import AvatarImage from '@/components/AvatarImage'
import StarRating from '@/components/StarRating'
import LinkButton from '@/components/LinkButton'
export default {
    layout: 'jukuPage',
    components: {
        AvatarImage,
        StarRating,
        LinkButton
    },
    data() {
        return {
            thumbs: this.$store.state.thumbs,
            img: this.$store.state.img,
            name: this.$store.state.name,
            address: this.$store.state.address,
            rate: this.$store.state.rate,
            id: this.$store.state.id,
            bio: this.$store.state.bio,
            categories: [
                {
                    category: '動画',
                    url: '/' + this.$store.state.id
                },
                {
                    category: '基本情報',
                    url: '/' + this.$store.state.id + '/' + 'info'
                },
                {
                    category: '料金',
                    url: '/' + this.$store.state.id + '/' + 'fee'
                },
                {
                    category: 'レビュー',
                    url: '/' + this.$store.state.id + '/' + 'review'
                }
            ]
        }
    },
    computed: {
        display_content() {
            return this.$route.path
        }
    },
    methods: {
        to_movie_page() {
            this.$router.push('/hiromitu/shortMovie/sample')
        },
        click_category(url) {
            this.$router.push(url)
        },
        to_enrollment() {
            this.$router.push('/enrollment')
        }
    }
}
</script>