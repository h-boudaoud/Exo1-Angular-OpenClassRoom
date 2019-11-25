import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {
  private name_component: boolean =false;
  private content_error: boolean
  private title_error: boolean;
  private new_post=null;
  @Input() postList:any;

  constructor() {
    this.title_error = true;
    this.content_error = true;
    this.new_post = {
      title: '',
      content: '',
      loveIts: 0,
      created_at: null
    }
  }

  ngOnInit() {
  }

  titleError() {
    let error = true;
    let regex = RegExp("^[a-z\\d\\- '\")(\\][\\@:\\/,;.!àçèé°]+$")
    //console.log('this.new_post.title',this.new_post.title,'\nregex : ',regex.test(this.new_post.title.trim()))
    if(this.new_post.title.trim().length==0 || !regex.test(this.new_post.title.trim())){
      error = false;
      return false;
    }
    console.log('  titel error : ',error)
    return true;
  }
  contentError() {
    let error = true;
    let regex = RegExp("^[a-z\\d\\-\\s'\")(\\][\\@:\\/,;.!àçèé°]+$")
    if(this.new_post.content.trim().length==0|| !regex.test(this.new_post.content.trim())){
      error = false;
      return false;
    }
    console.log('  titel error : ',error)
    return true;
  }

  onSubmit() {
    this.title_error = this.titleError();
    this.content_error = this.contentError();
    let validate = this.title_error && this.content_error;
    console.log('validate :', validate)
    if(this.title_error && this.content_error){
      let h = 0,w=0
      h = document.getElementById('post-add').offsetHeight
      w = document.getElementById('post-add').offsetWidth

      this.new_post.created_at = new Date()
      let index = this.postList.length
      this.postList.push(this.new_post)
      this.name_component = (this.postList[index]==this.new_post)?true:false;
      document.getElementById('post-add').style.height = h+'px'
      document.getElementById('post-add').style.width = w+'px'
      //document.getElementById('post-add').style.display= 'table-cell'
      //document.getElementById('post-add').style['vertical-align']= 'middle'
      //document.getElementById('post-add').style['text-align']= 'center'

      console.log('new_post : ',this.new_post, '\npostList[',index,'] ',this.postList[index])
    }
    console.log('posts : ',this.postList)
  }
}
