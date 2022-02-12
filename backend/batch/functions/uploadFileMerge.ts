import fs from 'fs'
import path from 'path'
import csvtojson from 'csvtojson'

const uploadFileMerge = async () => {
  const merge = new Promise((resolve)=>{
    const files = fs.readdirSync(path.join(__dirname, "../../upload"));
    const fileNameRegexp = /^(\d+-)?(?<name>.*)/
    let merged:any[] = []
    files.map( async (file,index) =>{
      console.log(file)
      const name:string | undefined = path?.parse(file)?.name?.match(fileNameRegexp)?.groups?.name

      //防災備蓄品種類
      const stockpileTypeColParser = {
        "id": "number",
        "item_ja": "string",
        "unit_ja": "string",
        "category_ja": "string",
        "image": "string",
        "description_ja": "string",
        "item_en": "string",
        "unit_en": "string",
        "category_en": "string",
        "description_en": "string",
        "infantsMale": "number",
        "infantsFemale": "number",
        "child1Male": "number",
        "child1Female": "number",
        "child2Male": "number",
        "child2Female": "number",
        "adultMale": "number",
        "adultFemale": "number",
        "agedMale": "number",
        "agedFemale": "number",
        "pet": "number",
        "url_yahoo": "string",
        "url_rakuten": "string",
        "url_amazon": "string"
      }

      const stockpileType = await csvtojson({
        colParser: stockpileTypeColParser,
        checkType:true
      }).fromFile(path.join(__dirname, `../data_files/code4fukui.github.io/tokyobichikunavi/csv/stockpile_list.csv`));


      const stockpileStatusColParser = {
        "id": "number",
        "備蓄品名": "string",
        "カテゴリー名": "string",
        "現在備蓄量": "string",
        "不足備蓄量": "string",
        "更新日": "string"
      }

      const stockpileStatus = await csvtojson({
        colParser: stockpileStatusColParser,
        checkType:true
      }).fromFile(path.join(__dirname, `../../upload/${name}.csv`));

      let tmp:any[] = []
      stockpileType.map((t) => {
        stockpileStatus.map((s) => {
          if(t.id === s.id){
            tmp.push(
              {
                ...t,
                currentQuantity: parseInt(s.現在備蓄量),
                shortQuantity: parseInt(s.不足備蓄量),
                updateDate: s.更新日
              }
            )
          }
        })
      })
      
      merged.push({
        evacuationCenter: name,
        stockpileStatus: tmp
      })

      if(files.length-1 === index){
        resolve(JSON.stringify(merged))
      }
    })
  })

  merge.then((res:any)=>{
    // console.log(res)
    fs.writeFileSync(
      path.join(__dirname, "../../../frontend/src/__mock__/data/stockpileStatusEC.json"),
      res
    );
  })

}

export default uploadFileMerge;