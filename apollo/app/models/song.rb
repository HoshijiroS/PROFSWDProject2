class Song < ActiveRecord::Base
 #Our uploader
  mount_uploader :attachment, AttachmentUploader # Tells rails to use this uploader for this model.
  #mount_uploader is an instance of AttachmentUploader
  #:attachment is the parameter
  validates :name, presence: true # Make sure the owner's name is present.
  #validates validates the name by making sure it is present
end