import Template from 'pages/Template';
import { Grid, Paper } from '@mui/material';
import Title from 'components/Title';
import SubTitle from 'components/SubTitle';
import TextBody from 'components/TextBody';
import TextBody2 from 'components/TextBody2';
import Space from 'components/Space';

const FAQ = () => {
  return (
    <Template>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: '', flexDirection: 'column' }}>
            <Title>
              本サイトは避難所の防災備蓄状況を登録・表示することができるオープンソーステンプレートです。
            </Title>
            <SubTitle>▼ 想定ユーザー</SubTitle>
            <TextBody>
              サイト運営者は、避難所の防災備蓄状況ファイルを各所から集め、データを定期的に更新して頂けるシビックテックボランティアの方を想定しています。
              <br />
              サイト利用者は、避難所の防災備蓄状況を参照することができます。
            </TextBody>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: '', flexDirection: 'column' }}>
            <Title>テンプレート利用方法とサイト運営手順</Title>
            <SubTitle>▼ テンプレートを準備</SubTitle>
            <TextBody>
              GitHub
              のアカウントを作成し、本リポジトリをフォークしてください。フォークする手順は
              <a href="https://docs.github.com/ja/get-started/quickstart/fork-a-repo">
                こちら
              </a>
              を参照してください
            </TextBody>
            <Space />
            <SubTitle>▼ 避難所の防災備蓄状況ファイルの作成方法</SubTitle>
            <TextBody>
              １．避難所毎に防災備蓄状況ファイルを作成してください。
              <br />
              <TextBody2>
                ・サンプルは backend/upload フォルダの
                佃島小学校（東京都中央区佃 2-3-1）.csv と
                京橋築地小学校（東京都中央区築地 2-13-1）.csv です
                <br />
                ・ファイル名の避難所名称と住所は
                <a href="https://catalog.data.metro.tokyo.lg.jp/dataset/t000003d0000000093">
                  東京都防災マップ 避難所・避難場所(CC BY 4.0)
                </a>
                の名称に合わせてください。元データに ID
                が無いため名称と住所で名寄せしています。
                <br />
                ・防災備蓄品種類（67 種）は
                <a href="https://www.bichiku.metro.tokyo.lg.jp/">
                  東京備蓄ナビ(MIT License)
                </a>
                の公開リストを使用しています。
                <br />
                ・id,備蓄品名,カテゴリー名の列は変更しないでください。id
                で東京備蓄ナビのリストと突合しています。
                <br />
                ・現在備蓄量,不足備蓄量,更新日列を最新化してください。最新のデータのみ表示されます。1
                行目の更新日を避難所の更新日として扱っています。
                <br />
                ・文字コードは UTF-8 にしてください。
              </TextBody2>
              <Space />
              ２．避難所毎に「避難所名称（住所）.csv」というファイル名で保存して
              backend/upload フォルダに格納してください。
              <br />
              <TextBody2>
                ・サイト運営者は各避難所の防災備蓄状況ファイルを各所から集めて下さい。
              </TextBody2>
              <Space />
              ３．避難所名称（住所）.csv フォーマット
              <br />
              <TextBody2>
                <table>
                  <tr>
                    <td>id</td>
                    <td>備蓄品名</td>
                    <td>カテゴリー名</td>
                    <td>現在備蓄量</td>
                    <td>不足備蓄量</td>
                    <td>更新日</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>水</td>
                    <td>食品</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2022/03/11</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>レトルトご飯</td>
                    <td>食品</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2022/03/11</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>レトルト食品</td>
                    <td>食品</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2022/03/11</td>
                  </tr>
                </table>
              </TextBody2>
            </TextBody>
            <br />
            <SubTitle>▼ 避難所の防災備蓄データを登録</SubTitle>
            <TextBody>
              避難所毎の防災備蓄状況ファイルから表示データを更新するバッチ処理を動かします。
              <br />
              <TextBody2>
                cd backend
                <br />
                npm install
                <br />
                npm run etl
              </TextBody2>
            </TextBody>
            <Space />
            <SubTitle>▼ 防災備蓄マップを公開</SubTitle>
            <TextBody>
              React web application をビルドし、デプロイしてください。
              <br />
              <TextBody2>
                cd frontend
                <br />
                npm install
                <br />
                npm run start
                <br />
                npm run build
              </TextBody2>
            </TextBody>
          </Paper>
        </Grid>
      </Grid>
    </Template>
  );
};

export default FAQ;
