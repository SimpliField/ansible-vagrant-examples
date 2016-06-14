all: ansible

vagrant:
	vagrant up

ansible: vagrant requirements
	ansible-playbook playbook.yml

requirements:
	ansible-galaxy install -r requirements.yml

clean:
	vagrant destroy
	rm -rf ./roles
	rm -rf ./.vagrant
