mkdir public/assets/output
cd public/assets
for i in *.mp4; do
  # echo $i
  ffmpeg -i $i -an output/$i;
done