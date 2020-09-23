<template>
    <div class="jp__review">
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
        <!-- <div class="n_reviews">
            2件のレビュー
        </div> -->
        <div class="reviews">
            <div class="review" v-for="(r, i) in reviews" :key="i">
                <div class="title">
                    {{ r.title }}
                </div>
                <StarRating :rate="r.rate" />
                <div class="status">
                    入塾時の学年：{{ r.status }}
                </div>
                <div class="text">
                    {{ r.text }}
                </div>
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
    .jp__review {
        margin: 0 $margin-side-sp 10vh;

        .n_reviews {
            color: $color-light;
            font-size: $fos-s-sp;
            margin-bottom: 8vw;
        }

        .reviews {
            color: $color-normal;

            .review {
                margin-bottom: 8vw;

                .title {
                    font-size: $fos-l-sp;
                    margin-bottom: 0.3vw;
                }

                .status {
                    color: $color-light;
                    margin-top: 0.8vw;
                }

                .text {
                    font-size: $fos-m-sp;
                    margin: 2vw 4vw 0;
                    line-height: 1.5;
                    letter-spacing: 0.06em;
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
            reviews: [
                {
                    title: 'とても面白い先生でした！',
                    status: '中学3年生',
                    rate: 5,
                    text: '高校受験のために夏休みから通い始めました。学校よりも先生と近くて話しやすくてよかったです！苦手な社会を教えてもらっていたのですが、先生の教え方がうまくて面白くて、今では一番好きな教科です！ありがとうございました！'
                },
                {
                    title: '動画で見た通りでよかった',
                    status: '保護者',
                    rate: 4,
                    text: '塾紹介の動画を拝見して、息子に合ってそうだと思い、入塾させました。申し込みの時にしか塾へ伺っていないので、塾の雰囲気や先生方の教え方が動画の通りなのか少し不安がありましたが、息子の話を聞く限り大丈夫だったようです。まだ入塾してから一か月しかたっていなく、成績の上昇は感じられませんが、期待を込めて星４とさせていただきます'
                }
            ],
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