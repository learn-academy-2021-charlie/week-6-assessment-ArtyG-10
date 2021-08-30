# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# this class defines a rails controller which is a child of the main ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2)
    #instance variable which is set to equal all the data in the BlogPost table. Used to render all data.
    @posts = BlogPost.all
  end

  def show
    # ---3)
    # Instance variable to show the selected blogpost by primary key (:id params) using active record command .find
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # Instance variable that uses .new to create a new, unsaved record to render a form to the user (HTTP GET)
  def new
    @post = Post.new
  end

  def create
    # ---5)
    # instance variable that utilizes the active record command .create which takes the .new form and actually saves the new blog to the database (HTTP POST)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  # edit is an controller method which is the first step in updating a blog. After finding the requested post with :id params, Rails uses the edit.html.erb view to display it.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #update active record with params, if valid input then show the blog, else go back to the edit screen
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      #if the post was not able to be destroyed then redirect to view that blog post.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  #the private keyword tells ruby that the following method can't be called from the outside
  private
  def blog_post_params
    # ---10)
    #Strong params which set which keys are permitted to be accessed/modified
    params.require(:blog_post).permit(:title, :content)
  end
end
