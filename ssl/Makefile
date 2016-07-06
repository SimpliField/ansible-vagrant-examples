all: ansible

vagrant:
	vagrant box update
	vagrant up

files/ssl:
	mkdir -p $@

ssl: files/ssl files/ssl/MyCert.crt

files/ssl/MyCert.pass.key:
	openssl genrsa -des3 -passout pass:x -out $@ 2048

files/ssl/MyCert.key: files/ssl/MyCert.pass.key
	openssl rsa -passin pass:x -in $< -out $@

files/ssl/MyCert.csr: files/ssl/MyCert.key
	openssl req -new -key $< -out $@ \
		-subj "/C=UK/ST=Warwickshire/L=Leamington/O=OrgName/OU=IT Department/CN=example.com"

files/ssl/MyCert.crt: files/ssl/MyCert.csr files/ssl/MyCert.key
	openssl x509 -req -days 365 -in $< -signkey $(word 2,$^) -out $@

ansible: vagrant requirements
	ansible-playbook playbook.yml

requirements:
	ansible-galaxy install -r requirements.yml

clean:
	vagrant destroy -f
	rm -rf ./roles
	rm -rf ./.vagrant
	rm -rf ./files
