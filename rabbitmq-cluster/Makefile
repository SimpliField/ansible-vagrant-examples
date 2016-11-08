all: ansible

vagrant:
	vagrant box update
	vagrant up

ansible: vagrant requirements
	ansible-playbook playbook.yml

requirements:
	ansible-galaxy install -r requirements.yml

clean:
	vagrant destroy -f
	rm -rf ./roles
	rm -rf ./.vagrant
