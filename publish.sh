#build
echo 'start...build prod!!!'
npm run build:prod
echo 'end...build prod!!!'

echo 'starting!!!replace static files...'
python upqiniu.py
echo 'end!!!replace static files...'

hosts=(
# 118.25.134.254
# 118.25.95.129
# 129.211.15.136
111.231.137.247
)

TEST_DIR=/Users/tianmeng/Desktop/Weixu/weixu-h5/dist/
SERVER_DIR=/var/www/weixu-f2e-H5-activity/laud/v2

for(( i=0;i<${#hosts[@]};i++)) 
do
	echo ${hosts[i]};
	rsync -apCvq -e 'ssh -p 10022' ${TEST_DIR} root@${hosts[i]}:${SERVER_DIR}
	echo 'rsync success'
done;
