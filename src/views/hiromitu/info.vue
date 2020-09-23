<template>
    <div class="jp__info">
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
        <div class="target_grade wrapper">
            <div class="title">
                対象
            </div>
            <div class="text">
                小学生、中学生、高校生
            </div>
        </div>
        <div class="class_format wrapper">
            <div class="title">
                授業形式
            </div>
            <div class="text">
                個別指導、完全個別指導、映像授業、オンライン授業
            </div>
        </div>
        <div class="class_time wrapper">
            <div class="title">
                授業時間
            </div>
            <div class="text">
                下記からお好きな曜日、時間を選べます！<br>
                (1コマ50分、休憩10分)<br>
                <br>
                火曜日～土曜日<br>
                ・1コマ目：9:00 ~ 9:50 <br>
                ・2コマ目：10:00 ~ 10:50 <br>
                ・3コマ目：11:00 ~ 11:50 <br>
                ・4コマ目：13:00 ~ 13:50 <br>
                ・5コマ目：14:00 ~ 14:50 <br>
                ・6コマ目：15:00 ~ 15:50 <br>
                ・7コマ目：16:00 ~ 16:50 <br>
                ・8コマ目：17:00 ~ 17:50 <br>
                ・9コマ目：18:00 ~ 18:50 <br>
                ・10コマ目：19:00 ~ 19:50
            </div>
        </div>
        <div class="wrapper">
            <div class="title">
                主な講師層
            </div>
            <div class="text">
                秋田大学
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
    .jp__info {
        margin-bottom: 10vh;
        .wrapper {
            margin: 0 $margin-side-sp 5vw;
            color: $color-normal;

            .title {
                font-size: $fos-l-sp;
                margin-bottom: 1vw;
            }

            .text {
                font-size: $fos-m-sp;
                margin-left: 5vw;
                line-height: 1.5;
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