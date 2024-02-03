package com.example.demo.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.Page;
import java.util.List;
import com.example.demo.db.model.*;
import com.example.demo.dto.*;
import java.time.LocalDateTime;

/**
* @class ProfileMapper
* 
*/
@Mapper
public interface ProfileMapper {
    ProfileMapper INSTANCE = Mappers.getMapper( ProfileMapper.class );
    
    /*
    * Map -profile user- to -profile-
    */
    public void map(ProfileUser src, @MappingTarget Profile dst);
    public Profile mapToProfile(ProfileUser src);
    /*
    * Map -profile- to -profile user-
    */
    public void map(Profile src, @MappingTarget ProfileUser dst);
    public ProfileUser mapToProfileUser(Profile src);
    
    /*
    * Map -profile admin- to -profile-
    */
    public void map(ProfileAdmin src, @MappingTarget Profile dst);
    public Profile mapToProfile(ProfileAdmin src);
    /*
    * Map -profile- to -profile admin-
    */
    public void map(Profile src, @MappingTarget ProfileAdmin dst);
    public ProfileAdmin mapToProfileAdmin(Profile src);
    
    /*
    * Map -profile- to -profile listing-
    */
    public void map(Profile src, @MappingTarget ProfileListing dst);
    public ProfileListing mapToProfileListing(Profile src);
    
    /*
    * Map -List<Profile>- to -List<profile listing>-
    */
    public void updateList(List<Profile> srcList, @MappingTarget List<ProfileListing> dstList);
}

