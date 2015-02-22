module.exports = {
    cron: {
        // cronTime: "00 30 4 * * 0-6"
        cronTime: "*/1 * * * *"
    },
    constVal: {
        articleColumns: 4,
        gender: {
            1: "Male",
            2: "Female",
            3: "Other"
        },
        socialRole: {
            employee: 1,
            freelance: 2,
            student: 3
        },
        singleOrMarried: {
            single: 1,
            married: 2
        }
    },
    auth: {
        facebook: {
            clientID: "860149774004462",
            clientSecret: "dfeab5e45a5a41005fb16e785eacc4f1",
            callbackURL: "http://localhost:3000/auth/facebook/callback"
        },
        twitter: {
            clientID: "3Jzd8wpkdC5ybaU3CmvJzw",
            clientSecret: "CHjoXJKOv7QB3QMSEv0j0J5KuPJvUoItc19FYqzY",
            callbackURL: "http://localhost:3000/auth/twitter/callback"
        },
        google: {
            realm: "http://localhost:3000/",
            callbackURL: "http://localhost:3000/auth/google/callback"
        }
    },
    appId: {
        yahoo: 'dj0zaiZpPXk2UGFvdUNNaEtRZCZzPWNvbnN1bWVyc2VjcmV0Jng9YTQ-'
    },
    gmail: {
        userId: 'channelwasabi',
        userPassword: 'gorck5k9',
        address: 'channelwasabi@gmail.com'
    },
    mailTemplate: {
        subject: 'Hiramekeyユーザー認証メール',
        html: '<b>hiramekey.comにてこのeメールでユーザー登録が行われました。このメールに心当たりがある場合、以下のリンクを押してhiramekeyのユーザー登録を終了させてください。</b>',
        verifyUrl: "http://localhost:3000/userVerify?mail="
    },
    numeric: {
        email: {
            maxLength: 50,
            minLength: 1
        },
        username: {
            maxLength: 15,
            minLength: 7
        },
        password: {
            maxLength: 10,
            minLength: 8
        },
        firstname: {
            maxLength: 20,
            minLength: 1
        },
        familyname: {
            maxLength: 20,
            minLength: 1
        }
    },
    page: {
        top: {
            userInformation: {
                english:'userInformation',
                japanese:'ユーザー情報'
            },
            news: {
                english: 'news',
                japanese: 'ニュース'
            },
            blog: {
                english: 'blog',
                japanese: 'ブログ'
            },
            album: {
                english: 'album',
                japanese: 'アルバム',
            },
            questionaire: {
                english: 'questionaire',
                japanese: 'アンケート'
            },
            recipe: {
                english: 'recipe',
                japanese: 'レシピ'
            },
            recordingDiet: {
                english: 'recordingDiet',
                japanese: 'レコーディングダイエット'
            }
        },
        second: {
            mypage: {
                english: 'mypage',
                japanese: 'マイページ'
            }
        },
        third: {

        }
    },
    condition: {
        regex: {
            isSymbol: "/!-/:-@¥[-`{-~]+$/i",
            isHankakuKigou: "/[!-/:-@≠\[-`{-~]/i",
            isHankakuKana: "[ｱ-ﾝﾞﾟｧ-ｫｬ-ｮｰ｡｢｣､]"
        }
    },
    messages: {
        updateMessages: {
            profileUpdated: 'プロフィールを更新しました',
            accountUpdated: 'アカウント情報を更新しました',
            contactUpdated: 'コンタクト情報を更新しました'
        },
        mailMessage: {
            successMessage: 'メッセージば無事に送信されました！',
            failMessage: 'メッセージ送信失敗！'
        },
        logout: {
            message: 'ログアウトしました。'
        },
        error: {
            message: 'errorが発生しました！',
            noUser: 'ユーザーが見つかりません。',
            wrongUsername: 'ユーザー名は英数文字で入力してください',
            wrongUsernameLength: 'ユーザー名は7文字〜15文字までです',
            alreadyExistsUsername: '入力されたユーザー名は既に登録済みです',
            wrongPassword: 'パスワードが間違っています。',
            passwordNotMatch: 'パスワードとパスワード確認用が一致しません',
            notCorrectPassword: 'パスワードは英数文字で入力してください',
            wrongPasswordLength: 'パスワードは８文字〜１０文字の間で入力してください',
            newPasswordNotMatch: '新しいパスワードと新しいパスワード確認用が一致しません',
            notCorrectNewPassword: '新しいパスワードは英数文字で入力してください',
            wrongNewPasswordLength: '新しいパスワードは８文字〜１０文字の間で入力してください',
            emailExists: 'そのemailは既に登録されています。',
            wrongEmail: '正しいメールアドレスを入力してください',
            wrongEmailLength: 'メールアドレスは５０文字までです',
            alreadyExistsEmail: '入力されたメールアドレスは既に登録済みです',
            wrongFirstname1: '記号は名前に入力できません',
            wrongFirstname2: '半角カナは名前に入力できません',
            wrongFirstnameLength: '名前は１文字以上、２０文字以内で記入してください',
            wrongFamilyname1: '記号は苗字に入力できません',
            wrongFamilyname2: '半角カナは苗字に入力できません',
            wrongFamilynameLength: '苗字は１文字以上、２０文字以内で記入してください',
            genderIsNumeric: '性別の値は数値です',
            wrongGenderLength: '性別の値が正しくありません',
            wrongGender: '性別で不正な値を検出しました',
            socialRoleIsNumeric: '社会的役割の値は数値です',
            wrongSocialRoleLength: '社会的役割の値が正しくありません',
            wrongSocialRole: '社会的役割で不正な値を検出しました',
            prefectureCdIsNumeric: '都道府県コードは数値です',
            wrongPrefectureCdLength: '都道府県コードの値が正しくありません',
            wrongPrefectureCd: '都道府県コードで不正な値を検出しました',
            cityCdIsNumeric: '市区町村コードは数値です',
            wrongCityCdLength: '市区町村コードの値が正しくありません',
            wrongCityCd: '市区町村コードで不正な値を検出しました',
            singleOrMarriedIsNumeric: '既婚／未婚の値は数値です',
            wrongSingleOrMarriedLength: '既婚／未婚の値が正しくありません',
            wrongSingleOrMarried: '既婚／未婚で不正な値を検出しました',
            wrongTerms: 'お知らせニュースの同意にて不正な値を検出しました',
            wrongSubscription: '加入の条項の同意にて不正な値を検出しました'
        },
        require: {
            email: 'メールアドレスを入力してください',
            username: 'ユーザー名を入力してください',
            password: 'パスワードを入力してください',
            passwordConfirm: 'パスワード確認用を入力してください',
            password: '新しいパスワードを入力してください',
            passwordConfirm: '新しいパスワード確認用を入力してください',
            familyname: '苗字を入力してください',
            firstname: '名前を入力してください',
            gender: '性別を入力してください',
            socialRole: '社会的役割を入力してください',
            prefectureCd: '都道府県を入力してください',
            cityCd: '市区町村を入力してください',
            singleOrMarried: '既婚／未婚を入力してください',
            aboutMySelf: '自己紹介文を入力してください'
        }
    }
};